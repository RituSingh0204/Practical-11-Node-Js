# Practical 11— Path Module in Node.js
**Name:** Ritu Singh  
**Roll No:** GF202346594  
**Course:** BCA Fullstack, Final Year

## Objective:
Develop a simple website in Node.js that tracks file path access.  
Check if redundancy exists, and handle it using the proper `path` method.

## Steps to Run:
1. Open folder `Practical 11` in VS Code  
2. Run `npm init -y`  
3. Install express → `npm install express`  
4. Create file `server.js`  
5. Paste the provided code  
6. Execute `node server.js`  
7. Visit `http://localhost:3000` in browser

## Output:
- Shows accessed file paths and detects redundancy.  
- Explains which path method is used.

## My View:
- If redundancy (like duplicate paths) exists → use `path.resolve()` to clean them.  
- If everything is structured correctly → `path.join()` is better for readability and simplicity.
