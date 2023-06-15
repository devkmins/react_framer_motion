import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  font-size: 28px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Cirlce = styled(motion.div)`
  background-color: #00a5ff;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClick] = useState(false);
  const toggleClicked = () => setClick((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Cirlce layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Cirlce layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
