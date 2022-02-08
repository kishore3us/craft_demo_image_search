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
        stage("Test") {
                    steps {

                        sh "npm test"
             }
        }

        stage("push") {
                            steps {

                                sh 'echo "Hello Tests"'
                     }
                }

    }
}