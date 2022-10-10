import { fetchTrendData } from '../../services/api';
import { Div } from 'components/Wrappers/Wrappers';
import { StyledLink } from '../../components/commonStyled';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendData(1).then(setMovies);
    }, []);
     
    return (
        <main>
            {' '}
            <Div as="ul">
                {movies.map(movie => (
                    <Div as="li" p="3" key={movie.id}>
                        <StyledLink to={`movies/${movie.id}`} state={{from: location}}>
                            {movie.title}
                        </StyledLink>
                    </Div>
                ))}
            </Div>
        </main>
    )
 }

export default Home;