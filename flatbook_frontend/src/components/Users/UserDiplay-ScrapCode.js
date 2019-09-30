<br></br><br></br>
<Container>
<br></br><br></br>
<Grid columns={2}>
      <Grid.Column>
        <Image centered src={this.props.user.pictures ? this.props.user.pictures : "https://cdn2.vectorstock.com/i/thumb-large/80/91/person-gray-photo-placeholder-little-boy-vector-22808091.jpg"} size='medium' circular />
      </Grid.Column>
      <Grid.Column>
        <br></br><br></br>
        <Segment> <strong>Name</strong> - {this.props.user.name} </Segment>
        <div className="background-info"><Segment><strong>Hometown</strong> - {this.props.user.hometown}</Segment></div>
        <Segment className="background-info"><strong>Occupation</strong> - {this.props.user.occupation}</Segment>
        <Segment className="background-info"><strong>Fun Fact</strong> - {this.props.user.fun_fact}</Segment>
      </Grid.Column>
    </Grid>
    <br></br><br></br><br></br><br></br>

    <Segment>

    <Header textAlign='center' as='h3'>Personal Journey</Header>
    <br></br>
    {this.props.user.story}
    </Segment>
</Container>








console.log(this.props.userSearch)
