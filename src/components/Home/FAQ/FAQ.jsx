import React from 'react'
import './FAQ.css'

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {motion} from 'framer-motion'

const FAQ = () => {
    return (
        <motion.section
            initial={{ y: '10', opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{ duration: 1 }}
            className='FAQ__section'
        >
            <div className="FAQ__section-left">
                <h1>Frequently asked questions</h1>
                <p>We understand that for users who are new to our platform may have difficulties in getting used to it. Therefore, we encourage users to read our FAQs and documentation.</p>
            </div>
            <div className='FAQ__section-right'>

                <Accordion defaultExpanded={true} sx={{ background: 'transparent', color: '#fff', marginBottom: '20px'  }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ borderBottom: '0.5px solid #2A47A1', borderBottomRightRadius: '30px' }}
                    >
                        <Typography
                            sx={{ fontSize: '20px', fontWeight: '700' }}
                        >How can one join IGOs and INOs?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ height: '100%' }}>
                        <Typography sx={{ fontSize: '18px', textAlign: 'left', marginTop: '10px' }}>
                            Follow the steps mentioned above in the gaming section for a deeper insight, or read our documentation on joining IGOs and INOs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ background: 'transparent', color: '#fff', marginBottom: '20px'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ borderBottom: '0.5px solid #2A47A1', borderBottomRightRadius: '30px' }}
                    >
                        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>What does IGO and INO mean?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ height: '100%' }}>
                        <Typography sx={{ fontSize: '18px', textAlign: 'left', marginTop: '10px' }}>
                            Follow the steps mentioned above in the gaming section for a deeper insight, or read our documentation on joining IGOs and INOs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ background: 'transparent', color: '#fff', marginBottom: '20px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ borderBottom: '0.5px solid #2A47A1', borderBottomRightRadius: '30px' }}
                    >
                        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>What does IGO and INO mean?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ height: '100%' }}>
                        <Typography sx={{ fontSize: '18px', textAlign: 'left', marginTop: '10px' }}>
                            Follow the steps mentioned above in the gaming section for a deeper insight, or read our documentation on joining IGOs and INOs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </motion.section>
    )
}

export default FAQ