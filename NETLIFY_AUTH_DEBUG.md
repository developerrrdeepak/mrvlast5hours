# Netlify Authentication Debugging Guide

यह guide आपकी Netlify deployment में authentication issues को solve करने के लिए है।

## 🔍 Quick Diagnostics

### 1. API Health Check
पहले check करें कि API working है:
```
https://your-app.netlify.app/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-XX...",
  "environment": "production"
}
```

### 2. Check Browser Console
- Open browser Developer Tools (F12)
- Go to Console tab
- Try to login and check for error messages
- Look for logs starting with 🔐, 📡, ❌

### 3. Check Netlify Function Logs
- Go to Netlify Dashboard
- Select your site
- Go to "Functions" tab
- Click on "api" function
- Check recent logs for errors

## 🔐 Admin Login Test

### Test Credentials (Default):
```
Email: developerrdeepak@gmail.com
Password: IITdelhi2023@
```

### Environment Variables (Optional):
If you want to change admin credentials, add these in Netlify:
```
ADMIN_EMAIL=your_admin@email.com
ADMIN_PASSWORD=your_secure_password
```

To set environment variables in Netlify:
1. Go to Site Settings
2. Environment Variables
3. Add new variables
4. Redeploy the site

## 👨‍🌾 Farmer Login Test

### OTP Flow:
1. Enter any valid email address
2. Click "Send OTP"
3. Check browser console for the generated OTP
4. Enter the OTP to login

Note: In production, OTP is not shown in console for security.

## ❌ Common Issues & Solutions

### Issue 1: "Invalid credentials" for Admin
**Cause**: Environment variables not set or incorrect
**Solution**: 
1. Check Netlify environment variables
2. Use default credentials: `developerrdeepak@gmail.com` / `IITdelhi2023@`
3. Redeploy after setting env vars

### Issue 2: "Network error" or API not responding
**Cause**: Netlify function not deployed properly
**Solution**:
1. Check if `netlify/functions/api.ts` exists
2. Verify `netlify.toml` configuration
3. Redeploy the site
4. Check function logs for errors

### Issue 3: "OTP not found" for Farmer login
**Cause**: Function state not persisting between requests
**Solution**:
1. This is a limitation of serverless functions
2. In production, use a database or Redis for OTP storage
3. For testing, use the OTP displayed in browser console

### Issue 4: Functions timing out
**Cause**: Cold start or function taking too long
**Solution**:
1. Check function logs for timeout errors
2. Optimize function bundle size
3. Consider upgrading Netlify plan for better performance

## 🛠️ Advanced Debugging

### Enable Debug Mode
Set environment variable in Netlify:
```
DEBUG_AUTH=true
```
This will show OTP in API responses even in production.

### Check Network Tab
1. Open Developer Tools → Network tab
2. Try to login
3. Look for API calls to `/api/auth/*`
4. Check response status and content

### Function Bundle Check
If functions are too large:
1. Check `netlify.toml` `included_files`
2. Verify `external_node_modules` list
3. Consider excluding unnecessary files

## 📞 Getting Help

If issues persist:
1. Share browser console logs
2. Share Netlify function logs
3. Specify exact error messages
4. Mention which login flow (admin/farmer) is failing

## 🔄 Recommended Testing Order

1. Test API health endpoint
2. Test admin login with default credentials
3. Test farmer OTP generation
4. Test farmer OTP verification
5. Check all error scenarios

## 📋 Pre-deployment Checklist

- [ ] `netlify.toml` configured correctly
- [ ] Environment variables set (if needed)
- [ ] Functions deploy successfully
- [ ] API redirects working
- [ ] Both login flows tested locally
- [ ] Error handling tested
