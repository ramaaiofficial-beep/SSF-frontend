# Quick Setup: Admin & Manager Accounts

## Credentials
- **Admin:** admin@shreesamrajyalakshmi.com / Amma@2025
- **Manager:** manager@shreesamrajyalakshmi.com / Amma@2025

## Fast Setup (3 Steps)

### Step 1: Create Auth Users in Supabase Dashboard

1. Go to **Supabase Dashboard** → **Authentication** → **Users**
2. Click **"Add User"** → **"Create new user"**
3. Create admin user:
   - Email: `admin@shreesamrajyalakshmi.com`
   - Password: `Amma@2025`
   - ✅ Check "Auto Confirm User"
   - Click "Create User"
   - **Copy the User ID** (UUID)
4. Create manager user:
   - Email: `manager@shreesamrajyalakshmi.com`
   - Password: `Amma@2025`
   - ✅ Check "Auto Confirm User"
   - Click "Create User"
   - **Copy the User ID** (UUID)

### Step 2: Run SQL Script

1. Go to **SQL Editor** → **New Query**
2. **If profiles already exist**, run this:
   ```sql
   UPDATE user_profiles
   SET role = 'admin'
   WHERE email = 'admin@shreesamrajyalakshmi.com';

   UPDATE user_profiles
   SET role = 'manager'
   WHERE email = 'manager@shreesamrajyalakshmi.com';
   ```

3. **If profiles don't exist**, run this (replace UUIDs):
   ```sql
   INSERT INTO user_profiles (user_id, full_name, email, role)
   VALUES 
     ('ADMIN_UUID_HERE', 'Admin User', 'admin@shreesamrajyalakshmi.com', 'admin'),
     ('MANAGER_UUID_HERE', 'Manager User', 'manager@shreesamrajyalakshmi.com', 'manager')
   ON CONFLICT (user_id) 
   DO UPDATE SET role = EXCLUDED.role;
   ```

### Step 3: Test Login

1. Go to `/auth/login`
2. Login with admin credentials → Should see admin portal
3. Logout
4. Login with manager credentials → Should see admin portal

## Done! ✅

If you need help, see `SETUP_CREDENTIALS_STEP_BY_STEP.md` for detailed instructions.

