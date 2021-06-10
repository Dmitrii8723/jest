import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from '../todo';

afterEach(() => {
    cleanup();
})
test('should render non-completed todo', () => {
    const todo = { id: 1, title: "wash dishes", completed: false };
    render(<Todo todo={todo} />);
    const todoElememt = screen.getByTestId('todo-1');
    expect(todoElememt).toBeInTheDocument();
    expect(todoElememt).toHaveTextContent('wash dishes');
    expect(todoElememt).not.toContainHTML('<strike><h1>wash dishes</h1></strike>');
});

test('should render completed todo', () => {
    const todo = { id: 1, title: "wash car", completed: true };
    render(<Todo todo={todo} />);
    const todoElememt = screen.getByTestId('todo-1');
    expect(todoElememt).toBeInTheDocument();
    expect(todoElememt).toHaveTextContent('wash car');
    expect(todoElememt).toContainHTML('<strike><h1>wash car</h1></strike>');
});

test('matches snapshot', () => {
const todo = { id: 1, title: 'wash dishes', completed: false };
const tree = renderer.create(<Todo todo={todo} />).toJSON();
expect(tree).toMatchSnapshot();
});