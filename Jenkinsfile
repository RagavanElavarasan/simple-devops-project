pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning code from Git repository...'
                git branch: 'main', url: 'https://github.com/RagavanElavarasan/simple-devops-project'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                bat 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t simple-node-app .'
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Stopping and removing existing container if exists...'
                bat '''
                    docker stop simple-node-app || echo "No running container found"
                    docker rm simple-node-app || echo "No container to remove"
                '''
                echo 'Running Docker container...'
                bat 'docker run -d -p 3000:3000 --name simple-node-app simple-node-app'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

    }
}
