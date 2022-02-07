pipeline {
     agent any
    // tools {docker "DOCKER"}
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