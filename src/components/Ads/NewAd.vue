<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mt-3">New Ad</h1>
				<v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field
           name="title" 
           label="Ad title" 
           type="text"
           required
           :rules="[v => !!v || 'Title  is required']"
           v-model="title">
          </v-text-field>
          <v-textarea 
           	name="description" 
          	label="Ad description" 
          	type="description"
          	
           	:rules="[v => !!v || 'Description  is required']"
          	v-model="description">
          </v-textarea>
        </v-form>
        <v-layout row mb-3>
        	<v-flex xs12>
        		<v-btn class="warning">Upload
							<v-icon right dark>cloud_upload</v-icon>	
        		</v-btn>
        	</v-flex>
        </v-layout>
        <v-layout row>
        	<v-flex xs12>
          		<img src='' height= "100">
        	</v-flex>
        </v-layout> 
        <v-layout row>
        	<v-flex xs12>
        		<v-switch
        		  v-model="promo"
        		  label="Ad to promo"
        		  color="primary"
        		></v-switch>
        	</v-flex>
        </v-layout>   
        <v-layout row>
        	<v-flex xs12>
						<v-spacer></v-spacer>
						<v-btn
						:disabled="!valid"
						class="success" 
						@click="createAd"
						>Create ad</v-btn>
        	</v-flex>
        </v-layout>

			</v-flex>
		</v-layout>

	</v-container>
</template>
<script>
	export default {
		data () {
			return {
				valid: false,
				title: '',
				description: '',
				promo: false,
			}
		},
		methods: {
			createAd () {
				if (this.$refs.form.validate()) {
					// logic
					const ad = {
						title: this.title,
						description: this.description,
						promo: this.promo,
						imageSrc: "https://www.valuecoders.com/blog/wp-content/uploads/2017/11/featurednew.jpeg"
					}
					this.$store.dispatch('createAd', ad)
				}
			}
		}
	}
</script>