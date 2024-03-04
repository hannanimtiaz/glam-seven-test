import { Button, Input } from "reactstrap";

const FieldWithAction = (props) => {
  return (
    <section>
      <div className="search-field">
        <Input placeholder={props?.placeholder} />
        <Button color="primary" onClick={props?.buttonAction}>
          {props?.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default FieldWithAction;
