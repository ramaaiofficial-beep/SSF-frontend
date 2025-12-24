# Admin/Manager Portal Not Showing - Fix Guide

## Problem Summary
When you login as admin or manager, their portals/UI are not showing. The page appears blank or redirects to `/dashboard`.

## Root Cause
The user's role in the database (`user_profiles` table) is not set to `'admin'` or `'manager'`. The app checks the role from the database, and if it's not admin/manager, it redirects to the donor dashboard.

## Solution: Set User Role in Database

### Quick Fix (5 minutes)

1. **Login to Supabase Dashboard**
   - Go to: https://app.supabase.com
   - Select your project

2. **Open SQL Editor**
   - Click "SQL Editor" → "New Query"

3. **Run this SQL** (replace with your email):
   ```sql
   -- Set your user as admin
   UPDATE user_profiles
   SET role = 'admin'
   WHERE email = 'your-email@example.com';
   ```

4. **Verify it worked:**
   ```sql
   SELECT email, full_name, role 
   FROM user_profiles 
   WHERE email = 'your-email@example.com';
   ```
   You should see `role = 'admin'`

5. **Logout and Login Again**
   - Logout from the app
   - Login with the same credentials
   - You should now see the admin portal at `/admin`

## Step-by-Step Instructions

### If You Already Have a User Account:

1. **Find your email** that you used to register/login
2. **Go to Supabase SQL Editor**
3. **Run:**
   ```sql
   UPDATE user_profiles
   SET role = 'admin'
   WHERE email = 'YOUR_EMAIL_HERE';
   ```
4. **Logout and login again**

### If You Need to Create a New Admin User:

#### Method 1: Register then Update Role
1. Register a new account at `/auth/register`
2. Note the email you used
3. In Supabase SQL Editor, run:
   ```sql
   UPDATE user_profiles
   SET role = 'admin'
   WHERE email = 'your-new-email@example.com';
   ```
4. Logout and login with the new account

#### Method 2: Create Directly in Database
1. **Create auth user:**
   - Supabase Dashboard → Authentication → Users
   - Click "Add User" → "Create new user"
   - Enter email and password
   - **Copy the User ID** (it's a UUID)

2. **Create profile with admin role:**
   ```sql
   INSERT INTO user_profiles (user_id, full_name, email, role)
   VALUES (
     'PASTE_USER_ID_HERE',
     'Admin Name',
     'admin@example.com',
     'admin'
   );
   ```

3. **Login** with the email and password you created

## Troubleshooting

### Still Not Working?

1. **Check browser console (F12)**
   - Look for errors about role or authentication
   - Check if role is being fetched correctly

2. **Verify role in database:**
   ```sql
   SELECT email, role FROM user_profiles WHERE email = 'your-email@example.com';
   ```

3. **Check if user profile exists:**
   ```sql
   SELECT * FROM user_profiles WHERE email = 'your-email@example.com';
   ```
   If this returns nothing, the profile doesn't exist. Create it using Method 2 above.

4. **Clear browser cache and cookies**
   - Sometimes old session data causes issues
   - Logout, clear cache, login again

5. **Check RLS (Row Level Security) policies**
   - If you get permission errors, you may need to temporarily disable RLS:
   ```sql
   ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;
   -- Run your UPDATE
   ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
   ```

## Admin Credentials

**There are NO default admin credentials.** You must:
1. Create a user account (register)
2. Set the role to 'admin' in the database
3. Login with that account

## Manager Role

To set a user as manager instead of admin:
```sql
UPDATE user_profiles
SET role = 'manager'
WHERE email = 'your-email@example.com';
```

Managers have access to the admin portal but with limited permissions (can't access `/admin/users` page).

## Files Created

I've created these helper files:
- `SETUP_ADMIN_CREDENTIALS.md` - Detailed setup guide
- `database/migrations/create_admin_user.sql` - SQL script to create admin
- `database/migrations/check_user_role.sql` - Diagnostic script to check roles

## Still Having Issues?

If the portal still doesn't show after setting the role:
1. Check browser console for errors
2. Verify the role was actually updated in the database
3. Make sure you're logging out and logging back in after the change
4. Try clearing browser cache/cookies

