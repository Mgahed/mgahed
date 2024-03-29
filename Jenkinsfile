pipeline {
    agent none
    environment {
      _PROJ_Name ='mgahed'
    }
     options {
           buildDiscarder(logRotator(numToKeepStr: '10', daysToKeepStr: '10', artifactNumToKeepStr: '10', artifactDaysToKeepStr: '10'))
           timeout(time: 100, unit: 'MINUTES')
           disableConcurrentBuilds()

             }
         stages {

          stage('deploy mgahed master'){

              agent {
              label 'master'
                }

            steps {

              script {
             if (env.BRANCH_NAME == 'develop' || env.BRANCH_NAME != 'develop') {
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
}
