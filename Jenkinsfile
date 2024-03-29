pipeline {
    agent any
    environment {
      _PROJ_Name ='mgahed'
    }
     options {
           buildDiscarder(logRotator(numToKeepStr: '10', daysToKeepStr: '10', artifactNumToKeepStr: '10', artifactDaysToKeepStr: '10'))
           timeout(time: 5, unit: 'MINUTES')
           disableConcurrentBuilds()
             }

         stages {
          stage('deploy mgahed master'){

            steps {
                sh '''
                  cd /var/www/mgahed
                  git config --global --add safe.directory /var/www/mgahed
                  git pull origin master
                  exit
                  '''
            }

          }
        }
    }