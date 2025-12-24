# Setting Up Admin/Manager Credentials

## Problem
When you login as admin or manager, their portals/UI are not showing. This happens because:
1. The user's role in the database is not set to 'admin' or 'manager'
2. The role is stored in the `user_profiles` table in Supabase
3. There are no default admin credentials - you need to create them

## Solution: Set User Role in Database

### Option 1: Using Supabase Dashboard (Recommended)

1. **Go to your Supabase Dashboard**
   - Navigate to: https://app.supabase.com
   - Select your project

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Run this SQL to set a user as admin:**
   ```sql
   -- Replace 'your-email@example.com' with the email of the user you want to make admin
   UPDATE user_profiles
   SET role = 'admin'
   WHERE email = 'your-email@example.com';
   ```

4. **Or set as manager:**
   ```sql
   UPDATE user_profiles
   SET role = 'manager'
   WHERE email = 'your-email@example.com';
   ```

5. **Verify the change:**
   ```sql
   SELECT email, full_name, role 
   FROM user_profiles 
   WHERE email = 'your-email@example.com';
   ```

### Option 2: Create a New Admin User

If you don't have a user account yet, follow these steps:

1. **Register a new account** through the app at `/auth/register`
2. **Note the email** you used to register
3. **Go to Supabase Dashboard** → SQL Editor
4. **Run this SQL:**
   ```sql
   -- Replace with your registered email
   UPDATE user_profiles
   SET role = 'admin'
   WHERE email = 'your-registered-email@example.com';
   ```

### Option 3: Create Admin User Directly in Database

If you want to create an admin user directly in the database:

1. **First, create the auth user in Supabase:**
   - Go to Supabase Dashboard → Authentication → Users
   - Click "Add User" → "Create new user"
   - Enter email and password
   - Copy the User ID that's generated

2. **Then create the profile with admin role:**
   ```sql
   -- Replace 'USER_ID_FROM_STEP_1' with the actual user ID
   -- Replace 'Admin Name' and 'admin@example.com' with your details
   INSERT INTO user_profiles (user_id, full_name, email, role)
   VALUES (
     'USER_ID_FROM_STEP_1',
     'Admin Name',
     'admin@example.com',
     'admin'
   );
   ```

## Troubleshooting

### Issue: Role not updating after login

After changing the role in the database:
1. **Logout** from the app
2. **Clear browser cache/cookies** (optional but recommended)
3. **Login again** with the same credentials
4. The role should now be updated

### Issue: Still redirecting to /dashboard

Check the browser console (F12) for errors. Common issues:
- Role not properly set in database (verify with SQL query above)
- RLS (Row Level Security) policies blocking the update
- User profile doesn't exist for the auth user

### Verify Current Role

Run this SQL to see all users and their roles:
```sql
SELECT 
  email, 
  full_name, 
  role,
  created_at
FROM user_profiles
ORDER BY created_at DESC;
```

## Default Admin Credentials

**There are NO default admin credentials.** You must:
1. Create a user account (register)
2. Set the role to 'admin' or 'manager' in the database
3. Login with that account

## Quick Setup Script

See `database/migrations/create_admin_user.sql` for a complete script to create an admin user.

