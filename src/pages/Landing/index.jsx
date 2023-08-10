import "../../App.css";
import { Button } from "@chakra-ui/button";
import { ModelArrowIcon } from "../../components/icons/Icons";
import { Image } from "@chakra-ui/image";
import LoadingWhite from "../../components/icons/Loading_White.gif";

function Landing() {
  return (
    <div>
      <Button variant="primary">Login</Button>
      <Button variant="primary" rightIcon={<ModelArrowIcon />}>
        Label
      </Button>
      <Button
        isLoading
        variant="solid"
        width={88}
        bg="purple.4"
        aria-label="Loading"
        spinner={<Image mt="16px" src={LoadingWhite} boxSize="40px" />}
        _loading={{ opacity: "1", pointerEvents: "none" }}
      />
    </div>
  );
}

export default Landing;
