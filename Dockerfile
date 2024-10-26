# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your application (if needed)
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run your application
CMD ["npm", "start"]
