import React from 'react';
import {Title} from './components/title/Title'
import FormInput from './components/form-input/FormInput'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export const Main = () => (
  <div>
    <Title title={'главная'}/>
    <Title title={'главная но не совсем'}/>
    <FormInput labelText={'имя'} inputType={'text'} />
    <FormInput labelText={'пароль'} inputType={'password'} />
    <FormInput labelText={'телефон'} inputType={'phone'} />
  </div>
);

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Main} />
            <Route exact path={'/blog'} component={() => <div>blog</div>} />
        </Switch>
    </BrowserRouter>
)