/**
 *
 *  No comment
 *  https://www.youtube.com/watch?v=He82NBjJqf8
 *
 */

var gulp = require('gulp')
var shell = require('gulp-shell')

/**
 * Build core on distant server
 */
gulp.task('send-core', shell.task([

  'rsync -az "." im.silverpeas.net:"/opt/silverpeas-sources/"',

  'ssh im.silverpeas.net ' +

  '"cd /opt/silverpeas-sources/Silverpeas-Core ' +

  '&& . /opt/silverpeas-6.0-SNAPSHOT-wildfly10/export-vars.sh ' +

  '&& mvn clean install -Dmaven.test.skip=true ' +

  '&& cd /opt/silverpeas-6.0-SNAPSHOT-wildfly10/bin/ ' +

  '&& ./silverpeas clean install debug"']));

/**
 * Build components
 */
gulp.task('send-components', shell.task([

  'rsync -az "." im.silverpeas.net:"/opt/silverpeas-sources/"',

  'ssh im.silverpeas.net ' +

  '"cd /opt/silverpeas-sources/Silverpeas-Components ' +

  '&& . /opt/silverpeas-6.0-SNAPSHOT-wildfly10/export-vars.sh ' +

  '&& mvn clean install -Dmaven.test.skip=true ' +

  '&& cd /opt/silverpeas-6.0-SNAPSHOT-wildfly10/bin/ ' +

  '&& ./silverpeas clean install debug"']));

/**
 * Build core locally
 */
gulp.task('build-core', shell.task([

  'cd /home/remipassmoilesel/projects/javaee/silverpeas/Silverpeas-Core ' +

  '&& mvn clean install -Dmaven.test.skip=true ' +

  '&& . /opt/silverpeas-6.0-SNAPSHOT-wildfly10/export-vars.sh ' +

  '&& cd /opt/silverpeas-6.0-SNAPSHOT-wildfly10/bin/ ' +

  '&& ./silverpeas clean install debug']));

/**
 * Build core library locally
 */
gulp.task('build-core-library', shell.task([

  'cd /home/remipassmoilesel/projects/javaee/silverpeas/Silverpeas-Core/core-library ' +

  '&& mvn clean install -Dmaven.test.skip=true ' +

  '&& . /opt/silverpeas-6.0-SNAPSHOT-wildfly10/export-vars.sh ' +

  '&& cd /opt/silverpeas-6.0-SNAPSHOT-wildfly10/bin/ ' +

  '&& ./silverpeas clean install debug']));

/**
 * Mirror utils directory (javascript files and others)
 */
gulp.task('mirror-utils-locally', shell.task([

  'cd /home/remipassmoilesel/projects/javaee/silverpeas/ ' +

  '&& rsync -avz Silverpeas-Core/core-war/src/main/webapp/util/ /opt/silverpeas-6.0-SNAPSHOT-wildfly10/bin/build/dist/util '

]));
