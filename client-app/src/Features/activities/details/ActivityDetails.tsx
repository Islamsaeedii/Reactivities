import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button, Image } from "semantic-ui-react";
import LoadingComponent from "../../../App/layout/loadingComponent";
import { useStore } from "../../../App/stores/store";


export default observer (function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity,loadingInitial } = activityStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg` } wrapped ui={false} />
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
                    <Button as={Link} to={`/manage/${activity.id}`} basic color="blue" content="Edit" />
                    <Button as={Link} to='/activities' basic color="green" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})