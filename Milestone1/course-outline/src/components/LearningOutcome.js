import { React, useState } from "react";
import {
  Table,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import GraduateAttribute from "./GraduateAttribute";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justify: "center",
  },
  paper: {
    marginTop: theme.spacing(2),
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 650,
  },
  text: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
}));

export default function LearningOutcome() {
  let outcomeNumber = 1;

  const [learningOutcome, setLearningOutcome] = useState([
    {
      id: uuidv4(),
      description: "",
    },
  ]);

  const [attribute, setAttribute] = useState([
    {
      id: uuidv4(),
      learningOutcome: "",
      graduateAttribute: "",
      instructionLevel: "",
    },
  ]);

  function addNewOutcomeRow() {
    setLearningOutcome([
      ...learningOutcome,
      {
        id: uuidv4(),
        description: "",
      },
    ]);
  }

  function handleOutcomeChange(e, i) {
    let result = learningOutcome.map((learningOutcome) => {
      return learningOutcome.id === i
        ? {
            ...learningOutcome,
            [e.target.name]: e.target.value,
          }
        : {
            ...learningOutcome,
          };
    });
    setLearningOutcome(result);
  }

  function deleteOutcomeRow(id) {
    const temp = [...learningOutcome];
    const filteredRow = temp.filter(
      (learningOutcome) => learningOutcome.id !== id
    );
    setLearningOutcome([...filteredRow]);
  }

  function addNewAttributeRow() {
    setAttribute([
      ...attribute,
      {
        id: uuidv4(),
        learningOutcome: "",
        graduateAttribute: "",
        instructionLevel: "",
      },
    ]);
  }

  function handleAttributeChange(e, i) {
    let result = attribute.map((attribute) => {
      return attribute.id === i
        ? {
            ...attribute,
            [e.target.name]: e.target.value,
          }
        : {
            ...attribute,
          };
    });
    setAttribute(result);
  }

  function deleteAttributeRow(id) {
    const temp = [...attribute];
    const filteredRow = temp.filter((attribute) => attribute.id !== id);
    setAttribute([...filteredRow]);
  }

  const columns = [
    {
      id: "learningOutcome",
      label: "Learning Outcome",
      minWidth: 0,
    },
    {
      id: "description",
      label: "Description",
      minWidth: 300,
    },
  ];

  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h5">2. Learning Outcomes</Typography>
        <Typography variant="subtitle1" align="left">
          At the end of this course, you will be able to:
        </Typography>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontSize: 16,
                      fontWeight: 600,
                      color: "black",
                      backgroundColor: "white",
                    }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align="center">
                  <Tooltip title="Insert Row" aria-label="insert">
                    <Fab
                      color="primary"
                      className={classes.fab}
                      onClick={addNewOutcomeRow}
                      size="small">
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {learningOutcome.map((learningOutcome, id) => (
                <TableRow key={id}>
                  <TableCell>
                    <Typography variant="body1" align="left">
                      {outcomeNumber++}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="standard-multiline-flexible"
                      placeholder="Outcome description"
                      name="description"
                      multiline
                      fullWidth
                      onChange={(e) =>
                        handleOutcomeChange(e, learningOutcome.id)
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIcon
                      onClick={() => deleteOutcomeRow(learningOutcome.id)}
                      style={{
                        cursor: "pointer",
                      }}
                      color="secondary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <GraduateAttribute
          attribute={attribute}
          addNewAttributeRow={addNewAttributeRow}
          handleAttributeChange={handleAttributeChange}
          deleteAttributeRow={deleteAttributeRow}
        />
        <Container align="right">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            // onClick={}
          >
            Save
          </Button>
        </Container>
      </div>
    </Container>
  );
}
