import React from "react";
import { RoundType } from "types";
import Theme from "./components/Theme";
import styles from "./Board.module.css";

interface BoardProps {
  round: RoundType;
}

function Board({ round: { themes } }: BoardProps) {
  return (
    <div className={styles.board}>
      {themes.map((theme) => (
        <Theme key={theme.id} theme={theme} className={styles.board__theme} />
      ))}
    </div>
  );
}

export default Board;
