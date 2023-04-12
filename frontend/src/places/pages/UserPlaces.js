import { useParams } from "react-router-dom"
import PlaceList from "../components/PlaceList"

const UserPlaces = () => {

    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire',
            description: 'famous',
            imageUrl: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=600',
            address: 'New Your',
            location: {
                lat: 41,
                lng: -74
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire2',
            description: 'famous',
            imageUrl: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=600',
            address: 'New Your',
            location: {
                lat: 41,
                lng: -74
            },
            creator: 'u2'
        }
    ]

    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces