FROM nginx:alpine

LABEL org.opencontainers.image.title="Hello Docker Learners!" \
    org.opencontainers.image.description="Web server showing host that responded" \
    org.opencontainers.image.authors="@dalto135"

# Create directory in container image for app code
RUN mkdir -p /usr/share/nginx/html

# Copy app code (.) to /usr/src/app in container image
COPY . /usr/share/nginx/html

# Set working directory context
WORKDIR /usr/share/nginx/html