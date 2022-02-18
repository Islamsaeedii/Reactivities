import React from "react";
import { Card, Button,Image } from "semantic-ui-react";
import { Activity } from "../../../App/models/Activity";

interface Props {
    activity : Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({openForm,activity,cancelSelectActivity}:Props) {
    return (
        <Card fluid>
            <Image src={`assets/categoryImages/${activity.category}.jpg`}  />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span >{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color="blue" content="Edit" />
                    <Button onClick={cancelSelectActivity} basic color="green" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}