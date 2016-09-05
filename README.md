Human Resources
----

An HR web app built in React+Redux with Django on the backend.

### Jobs CRUD

- Title
- Hourly rate
- Tax rate

### Time CRUD

- Time spent in minutes
- Date of entry
- Summary of work completed
- Associated job

### Invoices parameterized on job and date range

- Job
- Date range
- Time entries in range
- $ subtotal (hourly_rate * total_minutes/60)
- $ tax (subtotal * tax_rate)
- $ total


Installation
----

*Note: Python 2.7.12*

Clone the git repo and navigate to the directory:

```
git clone https://github.com/reeddunkle/HumanResources.git
cd HumanResources
```

Set up virtual environment and activate it:

```
virtualenv venv
source venv/bin/activate
```

Or if you're using virtualenvwrapper instead:

```
mkvirtualenv hr
```

Install Python dependencies:

```
pip install -r requirements.txt
```

Install npm dependencies:

```
npm install
```

