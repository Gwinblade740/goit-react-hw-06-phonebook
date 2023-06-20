import { FormComponent } from 'components/FormComponent/FormComponent';
import ListComponent from './ListComponent/ListComponent';
import Filter from 'components/Filter/Filter';

export default function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <FormComponent></FormComponent>
      <h2>Contacts</h2>
      <Filter></Filter>

      <ListComponent></ListComponent>
    </div>
  );
}
