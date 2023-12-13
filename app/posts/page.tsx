import Typography from '@mui/joy/Typography';
import ListItem from '@mui/joy/ListItem';
import List from '@mui/joy/List';
import Card from '@mui/joy/Card';

async function getData(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(res.json())
        }, 100)
    })
}

export default async function Home() {
    const data = await getData()
    return (
        <List>
            {data.map((post) => (
                <ListItem key={post.id}>
                    <Card variant="outlined" sx={{width: 343, display: 'flex', gap: 2}}>
                        <Typography >
                            {post.title}
                        </Typography>
                        <Typography level="body-lg">
                            {post.body}
                        </Typography>
                    </Card>
                </ListItem>
            ))}
        </List>
    )
}
