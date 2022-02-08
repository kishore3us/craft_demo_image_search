pipeline {
     agent any
     tools {nodejs "NODEJS"}
     stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "CI='' npm run build"
                sh 'echo "Hello World"'
            }
        }
        stage("JEST Test") {
                    steps {

                        ssh "CI='' npm test"
             }
        }

    }
}