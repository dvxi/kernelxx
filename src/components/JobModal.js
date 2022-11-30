import { Modal, Button } from 'react-bootstrap';

const JobModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="text-white text-center"
        >
            <Modal.Body className="p-4 rounded" style={{ backgroundColor: '#313131' }}>
                <h3>{props.info.job}</h3>
                <p className="mb-4" style={{textAlign: "justify"}}>
                    <br/>
                    <br/>

                    {props.info.companyDescription}
                    <br/><br/>
                    <h4>What's cool about this job</h4>
                    <br/>
                    {props.info.jobDescription}
                    <br/>
                    <h4>The day to day</h4>
                    <br/>
                    {props.info.responsibility}
                    <br/>
                    <h4>Your skills and expertise</h4>
                    <br/>
                    {props.info.skillDesc}
                    <br/>

                    {props.info.benefitsTitle}
                    {props.info.benefits}
                    <br/>
                    <h5>If you are interested or if you want to know more, press "Apply" button!</h5>

                </p>
                <div className="d-grip gap-2">
                    <Button variant="outline-primary" size="lg" href={props.info.link} target="_blank">
                        Apply!
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default JobModal;