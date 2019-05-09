import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/it' // whatever you import here will be set as default, no need to import all locales you intend to use

Vue.use(VueMoment, { moment })
/* Sync moment with I18n 
https://gist.github.com/oliviaisarobot/8203e062a58b9fd4762becabfd7f46d5
*/