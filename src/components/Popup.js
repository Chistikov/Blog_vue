import { Dialog } from 'quasar';

import TestComponent from './TestComponent';

export default {
  openLogInFrom() {
    Dialog.dialog({
      component: TestComponent,
      // title: 'Prompt',
      // message: 'What is your name?',
      // prompt: {
      //   model: '',
      //   type: 'text', // optional
      //   items: [
      //     { input: 'Option 1', value: 'opt1', color: 'secondary' },
      //     { input: 'Option 1', value: 'opt1', color: 'secondary' },
      //   ],
      // },
      // cancel: true,
      // persistent: true,
      text: 'something',
    })
      .onOk(() => {
        // .onOk((data) => {
        // console.log('>>>> OK, received', data)
      })
      .onCancel(() => {
        // console.log('>>>> Cancel')
      })
      .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      });
  },
};
