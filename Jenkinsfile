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
                  ssh -tt root@127.0.0.1<<EOF
                  cd /var/www/mgahed
                  sudo git pull origin master
                  exit
                  EOF'''
            }
          }
        }
    }
}
