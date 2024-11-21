import { Card } from 'components/containers';
import { Introduction } from './components';

export const Dashboard = () => {
  return (
    <div className="h-fit w-full grid grid-cols-1 sm:grid-cols-4 gap-2">
      <Introduction className="w-full h-80 sm:col-span-4 lg:col-span-3" />

      <Card className="w-full h-80 sm:col-span-4 lg:col-span-1">
        <Card.Header>
          <Card.Header.Title>Second Card</Card.Header.Title>
        </Card.Header>
      </Card>

      {/* <Card className="w-full h-80 sm:col-span-2 lg:col-span-1">
        <Card.Header>
          <Card.Header.Title>Third Card</Card.Header.Title>
        </Card.Header>
      </Card> */}

      <Card className="w-full h-80 sml:col-span-4">
        <Card.Header>
          <Card.Header.Title>Forth Card</Card.Header.Title>
        </Card.Header>
      </Card>
    </div>
  );
};
