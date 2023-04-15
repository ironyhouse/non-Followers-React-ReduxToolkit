import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App', () => {
  // it('render search form', () => {
  //   render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );

  // // TODO: check placeholder
  //   expect(screen.getByAltText('Instagram Logo')).toBeInTheDocument();
  //   expect(screen.getByText(/Enter username/i)).toBeInTheDocument();
  //   expect(screen.getByRole('textbox')).toBeInTheDocument();
  //   expect(screen.getByText('Show Non-Followers')).toBeInTheDocument();
  //   expect(screen.queryByText(/Non-Followers:/i)).toBeNull();
  // });

  // TODO: check input validation
  it('check search input', () => {
    // // ARRANGE
    // render(
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // );

    // // ACT
    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: '@ironyhouse' },
    // });

    // // ASSERT
    // expect(screen.getByRole('textbox')).toHaveValue('@ironyhouse');
    // // expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid');

    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'ironyhouse' },
    // });

    // expect(screen.getByRole('textbox')).toHaveValue('ironyhouse');
    // // expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid');
  });

  it('check non-followers list', async () => {
    // render(
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // );

    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'ironyhouse' },
    // });

    // userEvent.click(screen.getByRole('button'));

    // // screen.debug()

    // // expect(await screen.findByText(/Non-Followers:/i)).toBeInTheDocument();
    // // expect(await screen.findAllByRole('li')).toHaveLength(10);

  });
});
