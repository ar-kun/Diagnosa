# Use the official Node.js image with version 18.16.1 as the base image
FROM node:18.16.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose the port that Vite will run on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "preview"]
