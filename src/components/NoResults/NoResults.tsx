import { motion } from "framer-motion";

import { NoResultsWrapper } from "./NoResults.styles";

const NoResultsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export function NoResults(): JSX.Element {
  return (
    <NoResultsWrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={NoResultsVariants}
        transition={{ duration: 0.7 }}
      >
        <h2>😔 Você ainda não cadastrou nenhum finança</h2>
      </motion.div>
    </NoResultsWrapper>
  );
}
