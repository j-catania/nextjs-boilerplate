import Typography from '@mui/joy/Typography';
import ListItem from '@mui/joy/ListItem';
import List from '@mui/joy/List';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <List>
        {[1,2,3,4,5].map((id) => (
            <ListItem key={id}>
                <Card variant="outlined" sx={{width: 343, display: 'flex', gap: 2}}>
                    <Typography>
                        <Skeleton>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and
                            publishing industries.
                        </Skeleton>
                    </Typography>
                </Card>
            </ListItem>
        ))}
    </List>
}
