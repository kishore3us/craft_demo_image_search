pipeline {
     agent any
     tools {nodejs "nodejs"}
     stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "CI='' npm run build"
                sh 'echo "Hello World"'
            }
        }
    }
}