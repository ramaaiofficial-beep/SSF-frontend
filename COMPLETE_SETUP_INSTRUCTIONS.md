# Complete Setup Instructions: Admin & Manager Accounts

## Overview
You need to create **both** auth users AND user profiles. Auth users must be created in the dashboard first, then profiles are created via SQL.

## Step-by-Step Process

### Step 1: Create Auth Users in Supabase Dashboard

1. **Go to Supabase Dashboard**
   - Navigate to: https://app.supabase.com
   - Select your project

2. **Create Admin User**
   - Click: **Authentication** → **Users** → **"Add user"** button (green button)
   - Select: **"Create new user"**
   - Fill in:
     - **Email:** `admin@shreesamrajyalakshmi.com`
     - **Password:** `Amma@2025`
     - ✅ **Check "Auto Confirm User"** (important!)
   - Click **"Create User"**
   - **Note:** The User ID (UUID) will be shown - you can copy it, but the SQL script will find it automatically

3. **Create Manager User**
   - Click **"Add user"** again → **"Create new user"**
   - Fill in:
     - **Email:** `manager@shreesamrajyalakshmi.com`
     - **Password:** `Amma@2025`
     - ✅ **Check "Auto Confirm User"**
   - Click **"Create User"**

### Step 2: Create User Profiles via SQL

1. **Open SQL Editor**
   - In Supabase Dashboard, click **"SQL Editor"** (left sidebar)
   - Click **"New Query"**

2. **Run the SQL Script**
   - Copy and paste the contents of `CREATE_USERS_SIMPLE.sql`
   - Or use `database/migrations/create_admin_manager_complete.sql` for detailed version
   - Click **"Run"** (or press Ctrl+Enter)

3. **The script will:**
   - Automatically find the user IDs by email
   - Create user profiles with correct roles
   - Handle conflicts if profiles already exist

### Step 3: Verify Setup

Run this query to verify:
```sql
SELECT email, role, user_id 
FROM user_profiles 
WHERE email IN ('admin@shreesamrajyalakshmi.com', 'manager@shreesamrajyalakshmi.com');
```

You should see:
- `admin@shreesamrajyalakshmi.com` with role `admin`
- `manager@shreesamrajyalakshmi.com` with role `manager`

### Step 4: Test Login

1. Go to your app: `/auth/login`
2. **Login as Admin:**
   - Email: `admin@shreesamrajyalakshmi.com`
   - Password: `Amma@2025`
   - Should redirect to `/admin` and show admin portal

3. **Login as Manager:**
   - Email: `manager@shreesamrajyalakshmi.com`
   - Password: `Amma@2025`
   - Should also redirect to `/admin` and show admin portal

## Quick SQL Commands

### If you just want to run the SQL (after creating auth users):

```sql
-- Create Admin Profile
INSERT INTO user_profiles (user_id, full_name, email, role)
SELECT id, 'Admin User', 'admin@shreesamrajyalakshmi.com', 'admin'
FROM auth.users WHERE email = 'admin@shreesamrajyalakshmi.com'
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';

-- Create Manager Profile
INSERT INTO user_profiles (user_id, full_name, email, role)
SELECT id, 'Manager User', 'manager@shreesamrajyalakshmi.com', 'manager'
FROM auth.users WHERE email = 'manager@shreesamrajyalakshmi.com'
ON CONFLICT (user_id) DO UPDATE SET role = 'manager';
```

## Troubleshooting

### Error: "relation auth.users does not exist"
**Solution:** Make sure you're running this in Supabase Dashboard SQL Editor, not a custom tool. The `auth.users` table is only accessible from Supabase's SQL Editor.

### Error: "permission denied" or RLS error
**Solution:** You may need to temporarily disable RLS:
```sql
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;
-- Run your INSERT statements
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
```

### Error: "duplicate key value violates unique constraint"
**Solution:** The profile already exists. Just update the role:
```sql
UPDATE user_profiles SET role = 'admin' WHERE email = 'admin@shreesamrajyalakshmi.com';
UPDATE user_profiles SET role = 'manager' WHERE email = 'manager@shreesamrajyalakshmi.com';
```

### Can't find user IDs
**Solution:** Run this to find them:
```sql
SELECT id, email FROM auth.users 
WHERE email IN ('admin@shreesamrajyalakshmi.com', 'manager@shreesamrajyalakshmi.com');
```

## Files Available

1. **`CREATE_USERS_SIMPLE.sql`** - Simplest version (recommended)
2. **`database/migrations/create_admin_manager_complete.sql`** - Complete version with all options
3. **`COMPLETE_SETUP_INSTRUCTIONS.md`** - This file (detailed guide)

## Important Notes

⚠️ **You CANNOT create auth users via SQL** - they must be created in the Supabase Dashboard first.

✅ **The SQL scripts automatically find user IDs by email**, so you don't need to manually copy UUIDs.

✅ **After creating profiles, logout and login again** to see the admin portal.

