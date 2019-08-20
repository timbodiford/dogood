import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { width } from '@material-ui/system';

export default class AllOrgs extends Component {

    state = {
        organizations: []
    }
    componentDidMount() {
        this.getAllOrgs()
    }

    getAllOrgs = () => {
        axios.get('api/v1/organizations/')
            .then((res) => {
                this.setState({ organizations: res.data })
            })
    }

    render() {
        let orgList = this.state.organizations.map((organization) => {
            return (
                <div>
                <Link to={`organizations/${organization.id}`}>
                    <div className='org-list'>

                    </div>
                    <Card style={{maxWidth: 300}}>
                    <CardContent>
 
                      <Typography variant="h5" component="h2">
                      {organization.org_name}
                      </Typography>
                      <Typography  color="textSecondary">
                      {organization.contact_person}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {organization.contact_phone}
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                  </Link>

                  </div>
            )
        })
        return (
            <div>
                <h3>Currently participating organizations:</h3>
                <p>Select an organization below to view details and upcoming events.</p>
                <div className='org-list'>
                    {orgList}
                </div>
            </div>
        )
    }
}
