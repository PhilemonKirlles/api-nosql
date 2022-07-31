
const app = express();
const PORT = process.env.PORT || 3001;


app.use(require('./routes'));


// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost: ${PORT}`));