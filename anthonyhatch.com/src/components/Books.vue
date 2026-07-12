<template>
    <div class="card card-padding">
        <div class="card-header">
            <h5 class="alignleft">
                <a
                    class="books-link"
                    rel="nofollow"
                    href="https://www.goodreads.com/review/list/1604160-anthony?shelf=programming&utm_medium=api&utm_source=grid_widget"
                >Books</a>
            </h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-4 col-sm-3 col-md-2" v-for="book in books" :key="book.title">
                    <a :title="book.title" rel="nofollow" :href="book.url" target="_blank">
                        <img class="book-cover img-fluid" :src="book.cover" :alt="book.title" :title="book.title"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type Book from '@/models/Book'

const books: Book[] = [
    { title: 'Enshittification: Why Everything Suddenly Got Worse and What to Do About It', cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1745430964i/222376640.jpg', url: 'https://www.goodreads.com/book/show/222376640-enshittification' },
    { title: 'Modern Software Engineering: Doing What Works to Build Better Software Faster', cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635823845i/59517038.jpg', url: 'https://www.goodreads.com/book/show/59517038-modern-software-engineering' },
    { title: 'CLR via C# (Pro-Developer)', cover: 'https://images.gr-assets.com/books/1388551187m/7121415.jpg', url: 'https://www.goodreads.com/book/show/7121415-clr-via-c' },
    { title: 'The Effective Engineer: How to Leverage Your Efforts In Software Engineering to Make a Disproportionate and Meaningful Impact', cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1427583285i/25238425.jpg', url: 'https://www.goodreads.com/book/show/25238425-the-effective-engineer' },
    { title: "The Imposter's Handbook (The Imposter's Handbook, #1)", cover: 'https://images.gr-assets.com/books/1546356393m/31572054.jpg', url: 'https://www.goodreads.com/book/show/31572054-the-imposter-s-handbook' },
    { title: 'Professional ASP.Net MVC 1.0', cover: 'https://images.gr-assets.com/books/1348222555m/4760706.jpg', url: 'https://www.goodreads.com/book/show/4760706-professional-asp-net-mvc-1-0' },
    { title: 'ASP.NET 2.0 Website Programming: Problem - Design - Solution', cover: 'https://images.gr-assets.com/books/1436620104m/43764.jpg', url: 'https://www.goodreads.com/book/show/43764.ASP_NET_2_0_Website_Programming' },
    { title: 'Rails Antipatterns: Best Practice Ruby on Rails Refactoring', cover: 'https://images.gr-assets.com/books/1400891776m/9765652.jpg', url: 'https://www.goodreads.com/book/show/9765652-rails-antipatterns' },
    { title: 'The Ruby Programming Language', cover: 'https://images.gr-assets.com/books/1328834776m/2485075.jpg', url: 'https://www.goodreads.com/book/show/2485075.The_Ruby_Programming_Language' },
    { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', cover: 'https://images.gr-assets.com/books/1436202607m/3735293.jpg', url: 'https://www.goodreads.com/book/show/3735293-clean-code' },
    { title: 'The Clean Coder: A Code of Conduct for Professional Programmers', cover: 'https://images.gr-assets.com/books/1347470803m/10284614.jpg', url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder' },
    { title: 'The Rails 3 Way', cover: 'https://images.gr-assets.com/books/1301061482m/8017554.jpg', url: 'https://www.goodreads.com/book/show/8017554-the-rails-3-way' },
    { title: 'Professional Visual Studio 2010', cover: 'https://images.gr-assets.com/books/1348900673m/7355981.jpg', url: 'https://www.goodreads.com/book/show/7355981-professional-visual-studio-2010' },
    { title: 'PostgreSQL: Up and Running', cover: 'https://images.gr-assets.com/books/1343236861m/15769821.jpg', url: 'https://www.goodreads.com/book/show/15769821-postgresql' },
    { title: 'Confident Ruby', cover: 'https://images.gr-assets.com/books/1398328834m/15847933.jpg', url: 'https://www.goodreads.com/book/show/15847933-confident-ruby' },
    { title: 'Deploying Rails: Automate, Deploy, Scale, Maintain, and Sleep at Night', cover: 'https://images.gr-assets.com/books/1326987672m/13418076.jpg', url: 'https://www.goodreads.com/book/show/13418076-deploying-rails' },
    { title: 'Rails for .NET Developers', cover: 'https://images.gr-assets.com/books/1348474213m/4053977.jpg', url: 'https://www.goodreads.com/book/show/4053977-rails-for-net-developers' },
    { title: 'Developing an Angular 2 Edge', cover: 'https://images.gr-assets.com/books/1485242693m/33977164.jpg', url: 'https://www.goodreads.com/book/show/33977164-developing-an-angular-2-edge' },
    { title: 'Practical Object Oriented Design in Ruby', cover: 'https://images.gr-assets.com/books/1358916543m/13507787.jpg', url: 'https://www.goodreads.com/book/show/13507787-practical-object-oriented-design-in-ruby' },
    { title: 'The Way to Go: A Thorough Introduction to the Go Programming Language', cover: 'https://images.gr-assets.com/books/1441037980m/18844256.jpg', url: 'https://www.goodreads.com/book/show/18844256-the-way-to-go' },
    { title: 'The Pragmatic Programmer: From Journeyman to Master', cover: 'https://images.gr-assets.com/books/1401432508m/4099.jpg', url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer' },
    { title: 'A Philosophy of Software Design', cover: 'https://images.gr-assets.com/books/1531857377m/39996759.jpg', url: 'https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design' },
]
</script>

<style scoped>
    .book-cover {
        margin: 10px 0;
        max-height: 140px;
    }
    .books-link {
        text-decoration: none;
        color: inherit;
    }
    .card-padding {
        margin: 15px 0px;
    }
</style>
