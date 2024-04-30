/* eslint-disable react/prop-types */
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export default function AccordionDropDown({ itemData }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange} sx={{width: "99%"}} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${itemData._id}-content`}
        id={`${itemData._id}-header`}
      >
        <Typography>
          {itemData.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{itemData.description }<Link to={`/article/item/${itemData._id}`} className='text-orange-400 hover:text-orange-600'> View </Link></Typography>
      </AccordionDetails>
    </Accordion>
  );
}
