pipeline {
     agent any
     tools {nodejs "NODEJS"}
     stages {
        stage("Build") {
            steps {
                sh "docker build . -t jenkins/craftDemo"
                //sh "CI='' npm run build"
                sh 'echo "Hello World"'
            }
        }
    }
}