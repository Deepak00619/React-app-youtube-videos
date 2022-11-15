pipeline {
    agent any

    stages {
        stage('DEV') {
            steps {
               bat 'newman run Sample.postman_collection.json'
            }
        }
    }
}
