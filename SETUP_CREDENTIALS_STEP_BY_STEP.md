# Step-by-Step: Setup Admin and Manager Accounts

## Credentials Provided:
- **Admin:** admin@shreesamrajyalakshmi.com / Amma@2025
- **Manager:** manager@shreesamrajyalakshmi.com / Amma@2025

## Setup Instructions

### Step 1: Create Auth Users in Supabase

1. **Go to Supabase Dashboard**
   - Navigate to: https://app.supabase.com
   - Select your project

2. **Create Admin User**
   - Go to: **Authentication** → **Users**
   - Click **"Add User"** → **"Create new user"**
   - **Email:** `admin@shreesamrajyalakshmi.com`
   - **Password:** `Amma@2025`
   - **Auto Confirm User:** ✅ (check this box)
   - Click **"Create User"**
   - **Copy the User ID** (it's a UUID like `123e4567-e89b-12d3-a456-426614174000`)

3. **Create Manager User**
   - Click **"Add User"** → **"Create new user"** again
   - **Email:** `manager@shreesamrajyalakshmi.com`
   - **Password:** `Amma@2025`
   - **Auto Confirm User:** ✅ (check this box)
   - Click **"Create User"**
   - **Copy the User ID** (UUID)

### Step 2: Set Up User Profiles with Roles

1. **Open SQL Editor**
   - In Supabase Dashboard, click **"SQL Editor"**
   - Click **"New Query"**

2. **Run Option A (if profiles already exist):**
   ```sql
   -- Just update the roles
   UPDATE user_profiles
   SET role = 'admin'
   WHERE email = 'admin@shreesamrajyalakshmi.com';

   UPDATE user_profiles
   SET role = 'manager'
   WHERE email = 'manager@shreesamrajyalakshmi.com';
   ```

3. **OR Run Option B (if profiles don't exist yet):**
   ```sql
   -- Replace ADMIN_USER_ID_HERE and MANAGER_USER_ID_HERE with the UUIDs from Step 1
   INSERT INTO user_profiles (user_id, full_name, email, role)
   VALUES 
     (
       'ADMIN_USER_ID_HERE',  -- Paste admin UUID here
       'Admin User',
       'admin@shreesamrajyalakshmi.com',
       'admin'
     ),
     (
       'MANAGER_USER_ID_HERE',  -- Paste manager UUID here
       'Manager User',
       'manager@shreesamrajyalakshmi.com',
       'manager'
     )
   ON CONFLICT (user_id) 
   DO UPDATE SET 
     role = EXCLUDED.role,
     email = EXCLUDED.email,
     full_name = EXCLUDED.full_name;
   ```

### Step 3: Verify Setup

Run this query to verify:
```sql
SELECT 
  email,
  full_name,
  role,
  user_id
FROM user_profiles
WHERE email IN (
  'admin@shreesamrajyalakshmi.com',
  'manager@shreesamrajyalakshmi.com'
);
```

You should see:
- `admin@shreesamrajyalakshmi.com` with role `admin`
- `manager@shreesamrajyalakshmi.com` with role `manager`

### Step 4: Test Login

1. **Go to your app's login page:** `/auth/login`
2. **Login as Admin:**
   - Email: `admin@shreesamrajyalakshmi.com`
   - Password: `Amma@2025`
   - You should be redirected to `/admin` and see the admin portal

3. **Login as Manager:**
   - Email: `manager@shreesamrajyalakshmi.com`
   - Password: `Amma@2025`
   - You should also be redirected to `/admin` and see the admin portal

## Quick Setup Script

If you prefer, you can use the complete script in:
- `database/migrations/setup_admin_manager_accounts.sql`

## Troubleshooting

### Issue: "0 rows updated" when running UPDATE
**Solution:** The user profiles don't exist yet. Use Option B (INSERT) instead.

### Issue: "duplicate key value violates unique constraint"
**Solution:** The profile already exists. Use Option A (UPDATE) instead.

### Issue: "permission denied" or RLS error
**Solution:** You may need to run this as a service role. Or temporarily:
```sql
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;
-- Run your UPDATE/INSERT
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
```

### Issue: Can't find user IDs
**Solution:** Run this query to find them:
```sql
SELECT id, email, created_at 
FROM auth.users 
WHERE email IN (
  'admin@shreesamrajyalakshmi.com',
  'manager@shreesamrajyalakshmi.com'
);
```

## What Each Account Can Do

### Admin Account (`admin@shreesamrajyalakshmi.com`)
- ✅ Full access to admin portal
- ✅ Can manage all donations
- ✅ Can manage users and roles
- ✅ Can export data
- ✅ Can access all admin features

### Manager Account (`manager@shreesamrajyalakshmi.com`)
- ✅ Access to admin portal
- ✅ Can manage donations
- ✅ Can view transactions
- ✅ Can manage support tickets
- ❌ Cannot access `/admin/users` (user management)
- ❌ Cannot export data

## Security Notes

⚠️ **Important:**
- Change these passwords after initial setup
- These are default credentials - update them for production
- Consider using environment variables for sensitive credentials
- Enable 2FA for admin accounts in production

## Next Steps

After setup:
1. Test both accounts can login
2. Verify admin portal loads correctly
3. Test that manager has limited access
4. Change passwords to secure ones
5. Document the new credentials securely

