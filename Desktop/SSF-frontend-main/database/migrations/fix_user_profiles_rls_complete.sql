-- ============================================
-- COMPLETE FIX FOR USER PROFILES RLS POLICIES
-- ============================================
-- This migration ensures all RLS policies are properly configured
-- for INSERT, UPDATE, and SELECT operations on user_profiles
-- ============================================
-- CRITICAL: This fixes the "infinite recursion" error by ensuring
-- helper functions exist and policies use them correctly
-- ============================================

-- ============================================
-- STEP 1: Create helper functions (if they don't exist)
-- ============================================
-- These functions use SECURITY DEFINER to bypass RLS, preventing recursion

-- Function to check if user is admin or manager
CREATE OR REPLACE FUNCTION is_admin_or_manager()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'manager')
  );
END;
$$;

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  );
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION is_admin_or_manager() TO authenticated;
GRANT EXECUTE ON FUNCTION is_admin() TO authenticated;

-- ============================================
-- STEP 2: Ensure RLS is enabled
-- ============================================
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- ============================================
-- STEP 3: Drop all existing policies to start fresh
-- ============================================
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Admins and managers can view all profiles" ON user_profiles;

-- ============================================
-- STEP 4: Create SELECT policies
-- ============================================
-- Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = user_id);

-- Admins and managers can view all profiles
-- CRITICAL: Uses the helper function (SECURITY DEFINER) to avoid recursion
CREATE POLICY "Admins and managers can view all profiles"
  ON user_profiles FOR SELECT
  USING (is_admin_or_manager());

-- ============================================
-- STEP 5: Create INSERT policy
-- ============================================
-- CRITICAL: This policy is required for new users to create their profile
CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- STEP 6: Create UPDATE policy
-- ============================================
-- CRITICAL: Both USING and WITH CHECK are required for upsert operations
CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- After running this migration, verify policies exist:
-- SELECT * FROM pg_policies WHERE tablename = 'user_profiles';
-- 
-- You should see:
-- 1. "Users can view own profile" (SELECT)
-- 2. "Users can insert own profile" (INSERT)
-- 3. "Users can update own profile" (UPDATE)
-- 4. "Admins and managers can view all profiles" (SELECT)
-- ============================================

