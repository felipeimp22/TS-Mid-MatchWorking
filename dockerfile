FROM node:18.14.2-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

    # # Debug: Display contents of package.json
    # RUN cat package.json

    # # Debug: Display contents of package-lock.json
    # RUN cat package-lock.json

# Debug: Run build command
RUN npm run build

# Expose the port on which your application will run
EXPOSE 80

# Local
EXPOSE 3000


# # Command to run the application
CMD ["npm", "start"]
