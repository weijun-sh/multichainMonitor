import os
import sys
def uglifyjsFile (file):
    uglifyjsCmd = 'node_modules/.bin/uglifyjs ' + file + ' -m -o ' + file
    if os.system(uglifyjsCmd) != 0:
        print('uglifyjs fail!')
        sys.exit(1)

def uglifyjsDir (customizeConfigPath):
    for root,dirs,files in os.walk(customizeConfigPath):
        for file in files:
            if (file.split('.')[-1] == 'js'):
                uglifyjsFile(os.path.join(root,file))

if os.system('npm install uglify-es') != 0:
    print('npm install uglifyjs fail!')
    sys.exit(1)

uglifyjsDir ('/opt/grafana/grafana/public/build/')
