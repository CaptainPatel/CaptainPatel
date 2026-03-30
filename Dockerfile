# Use Node 24 as the base image
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (assuming 3000, change if different)
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
