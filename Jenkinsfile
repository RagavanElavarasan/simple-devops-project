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
                echo 'Running Docker container...'
                bat 'docker run -d -p 3000:3000 --name simple-node-app simple-node-app'
            }
        }
    }
}
